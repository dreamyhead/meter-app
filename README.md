# Тестовое задание Meter App
Необходимо разработать клиент-серверное приложение для просмотра результатов измерений посуточно с выбором пользователем даты отображения и прибора учета из списка.
Данные выводятся в табличном виде: 
столбцы — типы измерения, 
строки — интервалы измерения, 
ячейки — результаты измерения.

## Стэк технологий:
Frontend: 
- Angular
- RxJs

Backend: 
- ASP.NET Core (version 3.1)


## Описание API:
1. Список всех возвращаемых счетчиков:
```sh
[GET] https://localhost:44379/api/meter
```
2. Список всех записей счетчика, параметрами являются id счетчика и дата записей:
```sh
[GET] https://localhost:44379/api/record/{{id}}&{{date: yy-mm-dd}}
```

## Инструкция по запуску:
1. Backend:
  - Из Vusial Studio: Открываете файл MeterWebApp.sln и запускаете проект;
2. Frontend:
  - Из Vusial Studio Code: Открываете папку ClientApp и выполняете команду ng serve
