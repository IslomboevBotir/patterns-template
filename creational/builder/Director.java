package creational.builder;

public class Director {
    WebsiteBuilder builder;

    public void setWebsite(WebsiteBuilder builder) {
        this.builder = builder;
    }

    Website buildWebsite() {
        return builder
                .createWebsite()
                .buildCms()
                .buildName()
                .buildPrice()
                .website;
    }

}
