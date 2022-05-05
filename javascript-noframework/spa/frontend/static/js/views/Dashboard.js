import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
            <h1> Welcome back Lee</h1>
            <p>
                ksdfj;sdlkfj;sdlkfjsd;lfkjsd;lfjsd;fkjsd;flkjsd;fjsdf
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a> 
            </p>
        `;
    }
}