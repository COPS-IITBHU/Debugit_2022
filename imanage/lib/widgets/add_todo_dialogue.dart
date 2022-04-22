import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:imanage/models/todo.dart';
import 'package:imanage/models/todo_list.dart';
import 'package:imanage/notification_sevice.dart';

class AddTodoDialogue extends StatefulWidget {
  //const AddTodoDialogue({Key key}) : super(key: key);

  @override
  _AddTodoDialogueState createState() => _AddTodoDialogueState();
}

class _AddTodoDialogueState extends State<AddTodoDialogue> {
  final TextEditingController titlecontroller = TextEditingController();
  final TextEditingController desccontroller = TextEditingController();
  final TextEditingController timecontroller = TextEditingController();
  TodoList listItem = TodoList();
  Widget taskdisplay = Row(
    children: const [
      Center(
        child: Center(child: Text("Yay! No Pending Tasks")),
      )
    ],
  );
  late TimeOfDay time;
  late TimeOfDay picked;
  @override
  void initState() {
    super.initState();
    time = TimeOfDay.now();
  }

  Future<Null> selectTime(BuildContext context) async {
    picked = (await showTimePicker(context: context, initialTime: time))!;
    if (picked != null) {
      setState(() {
        time = picked;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5.0)),
        child: SizedBox(
            height: 300,
            width: 300,
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  TextField(
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: "Enter title",
                    ),
                    controller: titlecontroller,
                  ),
                  TextField(
                    decoration: const InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: "Enter description",
                    ),
                    controller: desccontroller,
                  ),
                  IconButton(
                    onPressed: () {
                      selectTime(context);
                      print(time);
                      timecontroller.text = time.toString();
                    },
                    icon: Icon(Icons.alarm),
                    iconSize: 40,
                  ),
                  TextButton(
                      child: const Text("Add"),
                      onPressed: () {
                        if (titlecontroller.text.isNotEmpty &&
                            desccontroller.text.isNotEmpty &&
                            timecontroller.text.isNotEmpty) {
                          Todo content = Todo(
                              title: titlecontroller.text,
                              description: desccontroller.text +
                                  "\n" +
                                  "Reminder set at " +
                                  timecontroller.text.substring(10, 15),
                              duration: DateTime(
                                  DateTime.now().year,
                                  DateTime.now().month,
                                  DateTime.now().day,
                                  time.hour,
                                  time.minute));
                          NotificationService().scheduleNotification(content);
                          Navigator.of(context).pop(content);
                        }
                      }),
                ],
              ),
            )));
  }
}
