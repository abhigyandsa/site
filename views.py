from flask import Blueprint, render_template, redirect

views = Blueprint('views', __name__)

@views.route("/")
def index():
  return render_template('index.html' , title='Abhigyan Das')
	
@views.route('/projects/asciicam/')
def asciicam():
  return render_template("projects/asciicam.html", title="AsciiCam - Abhigyan Das")

@views.route('/projects/timeleft/')
def timeleft():
  return render_template("projects/timeleft.html", title="Timeleft - Abhigyan Das", favicon="images/timeleft.png")
  
@views.route('/projects/markets101/')
def markets101():
  return render_template("projects/markets101.html", title="Markets101 - Abhigyan Das")
    
@views.route('/projects/unjumbler/')
def unjumbler():
  return render_template("projects/unjumbler.html", title="Unjumbler - Abhigyan Das")

@views.route('/contact/')
def contact():
  return render_template("contact.html", title="Contact - Abhigyan Das")

@views.route('/elements/')
def elements():
  return render_template("elements.html", title="Elements - Abhigyan Das")

