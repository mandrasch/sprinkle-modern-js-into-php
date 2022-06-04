// Fork of https://svelte.dev/repl/354bfb3b58be4e1994901059ee787c2b?version=3.48.0
import { writable } from 'svelte/store';

export function createTodos(initialValue = []) {
	const { subscribe, set, update } = writable(initialValue);

	return {
		subscribe,
		add(input, id) {
			const todo = {
				id,
				done: false,
				description: input.value
			};
			update((prev) => {
				return [todo, ...prev]
			})
		},

		remove(todo) {
			update((prev) => {
				return prev.filter(t => t !== todo);
			})
		},

		toggle(todo, done) {
			todo.done = done;
			this.remove(todo);
			update((prev) => {
				return prev.concat(todo);
			})
		}

	};
}