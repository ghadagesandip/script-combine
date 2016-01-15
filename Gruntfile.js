module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        processhtml: {

            dist: {
                options: {
                    process: true,
                    data: {
                        title: 'My app',
                        message: 'This is production distribution'
                    }
                },
                files: {
                    'dist/index.html': ['app/index.html']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['bower_components/jquery/dist/jquery.js','app/js/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/css/<%= pkg.name %>.min.css':  ['app/css/*.css']
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default',['cssmin','concat','uglify','processhtml'])
};