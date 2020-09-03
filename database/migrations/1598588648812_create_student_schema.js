'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateStudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments('student_id')
      table.string('first_name',120).notNullable()
      table.string('last_name',120).notNullable()
      table.string('email').unique().notNullable()// defuult length 255
      table.string('password').notNullable()
      table.integer('group_id').unsigned()
      table.timestamp('timestamps')// auto 2 column -> created_at , update_at

      table
     .foreign('group_id')
    .references('groups.group_id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')

    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = CreateStudentSchema
