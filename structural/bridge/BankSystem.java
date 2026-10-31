package structural.bridge;

public class BankSystem extends Program {
    protected BankSystem(Developer developer) {
        super(developer);
    }

    @Override
    public void developProgram() {
        System.out.println("Developing bank system program.......");
        developer.writeCode();
    }
}
