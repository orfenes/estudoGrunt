module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'assets/js/main.js' : [ 'assets/_js/script.js' ]
        }
      }
    }, // uglify

	  compass: {                 
	    dist: {                   
	      options: {  
	        config: 'config.rb'
	        
	      }
	    }
	  }, //compass


	  watch : {
      dist : {
        files : [
          'assets/_js/**/*',
          'assets/_sass/**/*'
        ],

        tasks : [ 'uglify', 'compass' ]
      }
    } // watch	  
  });




  // Plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );


  // Tarefas que serão executadas
  grunt.registerTask( 'default', ['uglify' ,'compass' ] );

   // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};