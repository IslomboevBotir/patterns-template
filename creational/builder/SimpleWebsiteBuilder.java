package creational.builder;

public class SimpleWebsiteBuilder extends WebsiteBuilder {

    @Override
    SimpleWebsiteBuilder buildName() {
        website.setName("Simple Website Builder");
        return this;
    }

    @Override
    SimpleWebsiteBuilder buildCms() {
        website.setCms(Cms.TILDA);
        return this;
    }

    @Override
    SimpleWebsiteBuilder buildPrice() {
        website.setPrice(500);
        return this;
    }
}
