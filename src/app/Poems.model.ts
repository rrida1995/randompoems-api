export class Poems {

    public content: String;
    public poetName: String;
    public poetUrl: String;
    public title: String;
    public poemUrl: String;

    constructor(values: Object = {}) {
        Object.assign(<Poems>this, values);
    }
}