# set the path to Tomcat binaries
export CATALINA_HOME=/c/Users/Shane/Desktop/Projects/examCreator/tomcat/apache-tomcat-10.0.2

# set the path to the instance config, i.e. current directory if this file is in the CATALINA_BASE directory
export CATALINA_BASE=/c/Users/Shane/Desktop/Projects/examCreator/lucee/lucee-8080

EXECUTABLE=${CATALINA_HOME}/bin/catalina.sh
exec $EXECUTABLE run