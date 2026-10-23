package main

import (
	"fmt"
	"os"
)

type Storage interface {
	Upload(filePath string) error
	Download(filePath string) ([]byte, error)
}

type GarageS3Storage struct {
	Bucket string
}

func (g *GarageS3Storage) Upload(filePath string) error {
	fmt.Printf("Garage: %s uploaded to s3://%s\n", filePath, g.Bucket)
	return nil
}

func (g *GarageS3Storage) Download(filePath string) ([]byte, error) {
	fmt.Printf("Garage: s3://%s/%s downloaded\n", g.Bucket, filePath)
	return []byte("data"), nil
}

type LocalStorage struct {
	BasePath string
}

func (l *LocalStorage) Upload(filePath string) error {
	fmt.Printf("Local: %s saved to %s\n", filePath, l.BasePath)
	return nil
}

func (l *LocalStorage) Download(filePath string) ([]byte, error) {
	fmt.Printf("Local: %s/%s read\n", l.BasePath, filePath)
	return []byte("data"), nil
}

type Constructor func(target string) Storage

var registry = map[string]Constructor{
	"garage": func(target string) Storage { return &GarageS3Storage{Bucket: target} },
	"local":  func(target string) Storage { return &LocalStorage{BasePath: target} },
}

func Register(kind string, c Constructor) {
	registry[kind] = c
}

func NewStorage(kind, target string) (Storage, error) {
	c, ok := registry[kind]
	if !ok {
		return nil, fmt.Errorf("unknown storage type: %s", kind)
	}
	return c(target), nil
}

func main() {
	strg, err := NewStorage("garage", "backups")
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}

	if err := strg.Upload("db.sql"); err != nil {
		fmt.Println("Upload error:", err)
	}

	data, err := strg.Download("db.sql")
	if err != nil {
		fmt.Println("Download error:", err)
	}
	fmt.Println("Received:", string(data))
}