package creational.prototype;

public class VersionControlRunner {
    public static void main(String[] args) {
        Project project = new Project(1, "New Project", "Description for new project");
        ProjectFactory projectFactory = new ProjectFactory(project);

        Project masterClone = projectFactory.cloneProject();

        System.out.println(project);

        System.out.println("===============================");

        System.out.println(masterClone);

        System.out.println(project.equals(masterClone));


    }
}
