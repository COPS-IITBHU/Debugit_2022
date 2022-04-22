import 'package:flutter/material.dart';
import 'package:imanage/models/todo.dart';

class TodoListItem extends StatelessWidget {
  final Todo todo;
  final int index;
  const TodoListItem({Key? key, required this.todo, required this.index})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      title: Text(todo.title),
      subtitle: Text(todo.description), //subtitle: Text(todo.duration)
    );
  }
}
