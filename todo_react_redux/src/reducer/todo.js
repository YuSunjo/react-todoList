/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
export const initialState = {
  todos: [
    {
      id: 1,
      text: '할일1',
      checked: true,
    },
    {
      id: 2,
      text: '할일2',
      checked: false,
    },
    {
      id: 3,
      text: '할일3',
      checked: true,
    },
  ],
  selectedTodo: false,
  selectedTodoItem: null,
};

export const INSERT_TOGGLE = 'INSERT_TOGGLE';
export const CREATE_TODOS = 'CREATE_TODOS';
export const TODO_ITEM = 'TODO_ITEM';
export const TODO_REMOVE = 'TODO_REMOVE';
export const TODO_UPDATE = 'TODO_UPDATE';
export const TODO_CHECK = 'TODO_CHECK';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_UPDATE: {
      const todoIndex = state.todos.findIndex((v) => v.id === action.id);
      const todo = { ...state.todos[todoIndex] };
      todo.text = action.text;
      const todos = [...state.todos];
      todos[todoIndex] = todo;
      return {
        ...state,
        todos,
      };
    }
    case TODO_CHECK: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.data ? { ...todo, checked: !todo.checked } : todo,
        ),
      };
    }
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((v) => v.id !== action.data),
      };
    case TODO_ITEM:
      return {
        ...state,
        selectedTodoItem: action.data,
      };
    case INSERT_TOGGLE:
      return {
        ...state,
        selectedTodo: action.data,
      };
    case CREATE_TODOS:
      return {
        ...state,
        todos: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
