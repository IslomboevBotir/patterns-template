package structural.bridge;

public class StockExchange extends Program {
    protected StockExchange(Developer developer) {
        super(developer);
    }

    @Override
    public void developProgram() {
        System.out.println("Developing stock exchange project.......");
        developer.writeCode();
    }
}
