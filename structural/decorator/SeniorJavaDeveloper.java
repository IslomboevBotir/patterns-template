package structural.decorator;

public class SeniorJavaDeveloper extends DeveloperDecorator {
    public SeniorJavaDeveloper(Developer developer) {
        super(developer);
    }

    public String reviewTasks() {
        return "Senior Java Developer review code";
    }

    @Override
    public String makeJob() {
        return developer.makeJob() + reviewTasks();
    }
}
