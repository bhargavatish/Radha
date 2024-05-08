const express = require('express')

const Attendance = require('../model/attendance')

exports.getAttendance = (req,res,next) => {
    const response  = Attendance.findAll();
    console.log(response);
}