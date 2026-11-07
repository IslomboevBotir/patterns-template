package structural.decorator;

public class Task {
    public static void main(String[] args) {
        Developer developer = new JavaTeamLead(new JavaDeveloper());
        Developer developer1 = new SeniorJavaDeveloper(new JavaDeveloper());

        System.out.println(developer.makeJob());
        System.out.println(developer1.makeJob());
    }
}
