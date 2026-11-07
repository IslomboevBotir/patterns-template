package structural.facade;

public class Workflow {
    Developer developer = new Developer();
    Job job = new Job();
    BugTracker bugTracker = new BugTracker();

    public void solveProblems() {
        job.doJob();
        bugTracker.startSprint();
        developer.doJobBeforeDeadLine(bugTracker);
        bugTracker.finishSprint();
    }

    public void readHubr() {
        bugTracker.finishSprint();
        developer.doJobBeforeDeadLine(bugTracker);
    }

}
