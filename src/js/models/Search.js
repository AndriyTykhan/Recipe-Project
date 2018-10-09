import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
	constructor(query) {
		this.query = query;
	}
	async getResult(query) {
		const url = 'https://www.food2fork.com/api/search';
		try {
			const res = await axios(`${proxy}${url}?key=${key}&q=${this.query}`)
			this.result = res.data.recipes;
		} catch(err){
			alert(err);
		}
	};
}