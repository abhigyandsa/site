from flask import Blueprint, render_template, redirect

views = Blueprint('views', __name__)

@views.route("/")
def index():
  return render_template('index.html' , title='Abhigyan Das')
	
@views.route('/projects/asciicam/')
def asciicam():
  return render_template("asciicam.html", title="AsciiCam - Abhigyan Das")

@views.route('/projects/timeleft/')
def timeleft():
  return render_template("timeleft.html", title="Timeleft - Abhigyan Das")
  
@views.route('/projects/markets101/')
def markets101():
  return render_template("markets101.html", title="Markets101 - Abhigyan Das")
    
@views.route('/projects/unjumbler/')
def unjumbler():
  return render_template("unjumbler.html", title="Unjumbler - Abhigyan Das")

@views.route('/contact/')
def contact():
  return render_template("contact.html", title="Contact - Abhigyan Das")
