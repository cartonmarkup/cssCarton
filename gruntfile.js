module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: false,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"carton.css": "carton.less"
				}
			}
		},
		watch: {
			styles: {
				files: ['*.less'],
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};
