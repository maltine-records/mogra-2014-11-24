module.exports = (grunt) =>
    grunt.initConfig
        pkg: grunt.file.readJSON('package.json')
        jade:
            compile:
                options:
                    pretty: true
                files: [
                    expand: true
                    cwd: 'src'
                    src: 'index.jade'
                    dest: 'dest/'
                    ext: '.html'
                ]
        stylus:
            compile:
                options:
                    compress: false
                files: [
                    expand: true
                    cwd: 'src'
                    src: 'index.styl'
                    dest: 'dest/'
                    ext: '.css'
                ]
        coffee:
            compile:
                options:
                    bare: true
                files: [
                    expand: true
                    cwd: 'src'
                    src: ['index.coffee']
                    dest: 'dest/'
                    ext: '.js'
                ]
        bower:
            install:
                options:
                    targetDir: 'dest/lib'
                    layout: 'byType'
                    install: true
                    cleanTargetDir: true
                    cleanBowerDir: false
        connect:
            server:
                options:
                    port: 3000
                    hostname: "*"
                    base: './dest/'
                    livereload: 35729
        esteWatch:
            options:
                dirs: [
                    "src/**"
                    "dest/**"
                ]
                livereload:
                    enabled: true
                    extensions: ['js', 'html', 'css']
                    port: 35729
            "coffee": (path) ->
                ['coffee']
            "jade": (path) ->
                ['jade']
            "styl": (path) ->
                ['stylus']
    grunt.loadNpmTasks 'grunt-contrib-jade'
    grunt.loadNpmTasks 'grunt-contrib-stylus'
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-bower-task'
    grunt.loadNpmTasks 'grunt-contrib-connect'
    grunt.loadNpmTasks 'grunt-este-watch'
    grunt.loadNpmTasks 'grunt-newer'
    grunt.registerTask 'make', ['bower', 'coffee', 'stylus', 'jade']
    grunt.registerTask 'default', ['make', 'connect', 'esteWatch']
