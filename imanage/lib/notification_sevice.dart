import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:timezone/timezone.dart' as tz;
import 'package:timezone/data/latest.dart' as tz;
import 'package:flutter/material.dart';
import 'package:imanage/models/todo.dart';
import 'package:imanage/models/todo_list.dart';
import 'package:imanage/widgets/add_todo_dialogue.dart';
import 'package:imanage/widgets/todo_list_item.dart';

class NotificationService {
  static FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
      FlutterLocalNotificationsPlugin();
  final TextEditingController titlecontroller = TextEditingController();
  final TextEditingController desccontroller = TextEditingController();
  TodoList todoList = TodoList();

  Future<void> init() async {
    const AndroidInitializationSettings initializationSettingsAndroid =
        AndroidInitializationSettings('flutterlogo');

    const InitializationSettings initializationSettings =
        InitializationSettings(android: initializationSettingsAndroid);
    tz.initializeTimeZones();
    await flutterLocalNotificationsPlugin.initialize(
      initializationSettings,
    );
  }

  Future<void> selectNotification(String payload) async {
    //Handle notification tapped logic here
  }
  Future<void> deleteNotification() async {
    await flutterLocalNotificationsPlugin.cancelAll();
  }

  Future<void> scheduleNotification(Todo todo) async {
    await flutterLocalNotificationsPlugin.zonedSchedule(
        todoList.alltodos().indexOf(todo),
        "Task pending: " + todo.title.toString(),
        "Complete your task!",
        tz.TZDateTime.from(todo.duration, tz.local),
        NotificationDetails(
          android: AndroidNotificationDetails(
            "channel id",
            "channel name",
            "channel description",
            priority: Priority.high,
            importance: Importance.high,
            playSound: true,
          ),
        ),
        uiLocalNotificationDateInterpretation:
            UILocalNotificationDateInterpretation.absoluteTime,
        androidAllowWhileIdle: true,
        payload: todo.title);
  }
}
