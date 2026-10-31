package structural.bridge;

public class ProgramCreator {
    public static void main(String[] args) {
        Program programs = new BankSystem(new CppDeveloper());
        programs.developProgram();

        Program program2 = new StockExchange(new JavaDeveloper());
        program2.developProgram();
    }
}
