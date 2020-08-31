'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
Route.get('/teachers','TeacherController.index')
Route.get('/teachers/:id','TeacherController.show')
Route.post('/teachers','TeacherController.store')
}).prefix('api/v1')
Route.group(() => {
  Route.get('/subjects','SubjectController.index')
  Route.get('/subjects/:id','SubjectController.show')
  Route.post('/subjects','SubjectController.store')
  }).prefix('api/v2')
  Route.group(() => {
    Route.get('/students','StudentsController.index')
    Route.get('/students/:id','StudentController.show')
    Route.post('/students','StudentController.store')
    }).prefix('api/v3')
    Route.group(() => {
      Route.get('/enrollments','EnrollmentController.index')
      Route.get('/enrollments/:id','EnrollmentController.show')
      Route.post('/enrollments','EnrollmentController.store')
      }).prefix('api/v4')
      Route.group(() => {
        Route.get('/groups','GroupController.index')
        Route.get('/groups/:id','GroupController.show')
        Route.post('/groups','GroupController.store')
        }).prefix('api/v5')