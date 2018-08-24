import { Injectable } from "../../../node_modules/@angular/core";
import { FirebaseDatabase, FirebaseFirestore } from "../../../node_modules/angularfire2";
import { AngularFirestore } from "../../../node_modules/angularfire2/firestore";
import { Place } from "../models/place";

@Injectable()
export class PlacesService{

    constructor(private afs: AngularFirestore){}

    /*
    places: any = [
        {id: 1, plan: 'free', closeness: 1, distance: 0.50, name: 'Barsoke' , visits: 0, description: 'Una gasolinería que parece un mini centro comercial', favorite: false, disabled: false ,lat: 10.0472003, lng: -69.2637897 },
        {id: 2, plan: 'premiun', closeness: 2, distance: 4.50, name: 'Arkiteck' , visits: 0, description: 'Es una empresa desarrolladora de software', favorite: false, disabled: false ,lat: 10.0724655, lng: -69.29871921 },
        {id: 3, plan: 'free', closeness: 1, distance: 1, name: 'Panadería la Alianza' , visits: 0, description: 'Una panadería que vende muy caro xD', favorite: false, disabled: false ,lat: 10.0727923, lng: -69.2987192 },
        {id: 4, plan: 'premiun', closeness: 3, distance: 8.50, name: 'Los Girasoles' , visits: 0, description: 'Un lugar muy confortable para vivir en el este de Barquisimeto', favorite: false, disabled: false ,lat: 10.0640773, lng: -69.2829232 },
        {id: 5, plan: 'premiun', closeness: 3, distance: 8, name: 'La Hacienda' , visits: 0, description: 'La urbanización mas chévere de Cabudare', favorite: false, disabled: false ,lat: 10.0460749, lng: -69.2667084 },
        {id: 6, plan: 'free', closeness: 1, distance: 0.50, name: 'La Venus' , visits: 0, description: 'Una panadería que vende muy caro...', favorite: false, disabled: false ,lat: 10.0632766, lng:-69.2828658 },
        {id: 7, plan: 'free', closeness: 3, distance: 12, name: 'Maro\'s Café' , visits: 0, description: 'El negocio del papá de Julio', favorite: false, disabled: false ,lat: 10.065206, lng: -69.2934823 },
        {id: 8, plan: 'free', closeness: 2, distance: 6.50, name: 'El Paso' , visits: 0, description: 'Venden unos burritos que no juegan carro', favorite: false, disabled: false ,lat: 10.0647245, lng: -69.2953793 }
    ];*/

    public getCollection(){
        return this.afs.collection<Place>('/places');
    }

    public generateId(){
        return this.afs.createId();
    }

    /*
    public getPlace(id:number = null){
        if(!id){
            throw new TypeError('Id is not defined in getPlace provider');
        }
        return this.places.find((place) => {
            return place.id === id;
        });
    }*/
}