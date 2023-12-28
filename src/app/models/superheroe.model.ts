export class Superheroe {
    id: number = 0;
    superheroe: string = "";
    editor: string = "";
    actor_principal: string = "";
    tematica: string = "";
    personajes: string = "";
    imagen: string = "";
  

    constructor(id: number, superheroe: string, editor: string, actor_principal: string,  tematica: string, personajes: string, imagen: string ) {
        this.id = id;
        this.superheroe = superheroe;
        this.editor = editor;
        this.actor_principal = actor_principal;
        this.tematica = tematica;
        this.personajes = personajes;
        this.imagen = imagen;
       
    }
}