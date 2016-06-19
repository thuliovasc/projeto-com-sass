module.exports = function (grunt) {
    
    "use strict";
    
    var config;
    
    config = {
        imagemin: {
            dynamic:{
                files:[{
                    expand: true,
                    cwd:'assets/img/',
                    src:['**/*.{png,jpg,gif}'],
                    dest:'assets/img/'
                }]
            }
        }, //Temina o minificador de imagem

        
        uglify: {
            my_target: {
                files: {
                    'dist/js/script.js': ['source/js/*.js','node_modules/bootstrap/dist/js/bootstrap.min.js'] //Ele vai buscar todos os arquivos js e comprimi-los em apenas 1
                }
            }
        }, // termina o uglify
        
        
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        }, //Fim do d Compass
        
        
        watch: {
            options: {livereload: true},
            scripts: {
                files: ['source/js/*.js'],
                tasks:['uglify']
            },
            css: {
                files: ['source/scss/*.scss'],
                tasks: ['compass:dev']
            },
            html: {
                files: ['dist/*.html']
            }

        }
        
    };

    //init 
    grunt.initConfig(config);

    //load task
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');


    //register
    grunt.registerTask('default', 'watch');
    grunt.registerTask('panda', ['imagemin']);
};