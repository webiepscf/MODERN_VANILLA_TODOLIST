export default class {

    static setApiURL (data) {
        this.apiURL = data;
    }
    
    static async findAll() {
        const reponse = await fetch(this.apiURL + "/tasks");
        return await reponse.json();
    }

    static async addOne (data) {
        const reponse = await fetch(this.apiURL + "/tasks", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        return await reponse.json();
    }

}
