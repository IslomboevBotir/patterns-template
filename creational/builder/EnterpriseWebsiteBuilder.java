package creational.builder;

public class EnterpriseWebsiteBuilder extends WebsiteBuilder {

    @Override
    EnterpriseWebsiteBuilder buildName() {
        website.setName("Enterprise Website");
        return this;
    }

    @Override
    EnterpriseWebsiteBuilder buildCms() {
        website.setCms(Cms.WORDPRESS);
        return this;
    }

    @Override
    EnterpriseWebsiteBuilder buildPrice() {
        website.setPrice(1000);
        return this;
    }
}
