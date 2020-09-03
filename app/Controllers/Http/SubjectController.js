'use strict'
const Database = use('Database')
const Subject = use('App/models/subject')
class SubjectController {
    async index({request}) {
        //? subject?references=teachers
        const {references=""} = request.qs
        const extractedReferences = references.split(",") 
        const subjects = Subject.query
        if (references && extractedReferences.length)
        subjects.with(extractedReferences)
        return {status:200 ,error:undefined,data: subjects }
    }
     async show ({request}) {
         const {id} = request.params
         const subject = await Subject.find(id)
         return {status:200 ,error:undefined,data:subject|| {}}
     }
     async store ({request}){
         const {title,teacher_id} = request.body
         const subject = new Subject();
         subject.title= title;
         subject.teacher_id = teacher_id
         await subject.save()
        return {status:200,error: undefined,data : subject}
     }
     async showTeacher({request}){
         const {id} = request.params
         const subject = await Database
         .table('subject')
         .where({subject_id: id})
         .innerJoin('teacher','Subjects.teacher_id','teacher.teacher_id')
         .first()
         return{status:200, error:undefined,data:subject || {} }

     }
}

module.exports = SubjectController
