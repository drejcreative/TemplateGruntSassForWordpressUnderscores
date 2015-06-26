module.exports = function(grunt) {

  grunt.initConfig ({

      pkg: grunt.file.readJSON('package.JSON'),

      //sass task
      sass: {
        dev: {
          options: {
            style: 'expanded', //nested, compressed, expanded, compact
            sourcemap: 'none',
          },//options
          files: {
            'compiled/style-NONcompresed.css': 'sass/style.scss'
          }//files
        },//dev

        dist: {
          options: {
            style: 'compressed', //nested, compressed, expanded, compact
            sourcemap: 'none'
          },//options
          files: {
            'compiled/style.css': 'sass/style.scss'
          }//files
        }//dist

      },//sass

      //Autoprefixer task
      autoprefixer: {
        options: {
          browsers: ['last 2 versions']
        },//options
        multiple_files: {
          expand: true,
          flatten: true,
          src: 'compiled/*.css',
          dest: ''
        }
      },

      //watch task
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass', 'autoprefixer']
        }//css
      }//watch

  });//grunt.initConfig

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['watch']);

}
