package structural.decorator;

public class JavaTeamLead extends DeveloperDecorator {

    public JavaTeamLead(Developer developer) {
        super(developer);
    }

    public String giveTasks() {
        return "Java Team Lead Give tasks for your team";
    }

    @Override
    public String makeJob() {
        return developer.makeJob() + giveTasks();
    }
}
