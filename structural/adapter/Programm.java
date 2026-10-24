package structural.adapter;

public class Programm {
    public static void main(String[] args) {
        JavaApplicationToDatabaseAdapter applicationToDatabaseAdapter = new JavaApplicationToDatabaseAdapter();
        applicationToDatabaseAdapter.insert();
        applicationToDatabaseAdapter.select();
        applicationToDatabaseAdapter.delete();
        applicationToDatabaseAdapter.update();
    }
}
