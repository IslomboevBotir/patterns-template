package creational.builder;

public abstract class WebsiteBuilder {
    Website website;

    WebsiteBuilder createWebsite() {
        website = new Website();
        return this;
    }

    abstract WebsiteBuilder buildName();

    abstract WebsiteBuilder buildCms();

    abstract WebsiteBuilder buildPrice();

    Website getWebsite() {
        return website;
    }

}
