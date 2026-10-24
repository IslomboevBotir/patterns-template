package structural.adapter;

public class JavaApplicationToDatabaseAdapter extends JavaApplication implements Database {
    @Override
    public void insert() {
        insertObject();
    }

    @Override
    public void select() {
        selectObject();
    }

    @Override
    public void update() {
        updateObject();
    }

    @Override
    public void delete() {
        deleteObject();
    }
}
