import 'package:imanage/models/todo.dart';

class TodoList {
  final List<Todo> allTodos = [];

  List<Todo> alltodos() {
    return allTodos;
  }

  void addTodo(Todo todo) {
    allTodos.add(todo);
  }

  void deleteTodo(Todo todo) {
    allTodos.remove(todo);
  }
}
