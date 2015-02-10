module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	concat: {
	    options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
	    bootstrap: { // Обязательно сохраняйте порядок склеки
	        src: ['_/components/javascripts/jquery.js', // JQuery
                  '_/components/javascripts/jquery-ui.js',
                  '_/components/javascripts/affix.js', // Start bootstrap
                  '_/components/javascripts/transition.js',
                  '_/components/javascripts/tooltip.js',
                  '_/components/javascripts/alert.js',
                  '_/components/javascripts/button.js',
                  '_/components/javascripts/carousel.js',
                  '_/components/javascripts/collapse.js',
                  '_/components/javascripts/dropdown.js',
                  '_/components/javascripts/modal.js',
                  '_/components/javascripts/popover.js',
                  '_/components/javascripts/scrollspy.js',
                  '_/components/javascripts/tab.js' // End Botstrap
				],
            dest: '_/components/javascripts/_bootstrap.js'
	    },
        prod_js: {
            src: [
                '_/components/javascripts/_bootstrap.js',
				'_/components/javascripts/url.js',
                '_/components/javascripts/my_working.js' // My js compiled from coffee script
            ],
            dest: '_/components/javascripts/_main.js'
        },
	    prod_css: {
	        src: ['_/components/styles/bootstrap.css',
                  '_/components/styles/less.css',
                  '_/components/styles/sass.css',
                  '_/components/styles/jquery-ui.css'
                 ],
            dest: '_/components/styles/_style.css'
	    },
        dev_js: {
            src: [
                '_/components/javascripts/_bootstrap.js',
				'_/components/javascripts/url.js',
                '_/components/javascripts/my_working.js' // My js compiled from coffee script
            ],
            dest: '_/javascripts/main.min.js'
        }, 
        dev_css: {
            src: ['_/components/styles/bootstrap.css',
                  '_/components/styles/less.css',
                  '_/components/styles/sass.css',
                  '_/components/styles/jquery-ui.css'
                 ],
            dest: '_/styles/style.min.css'
        }
	},
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: '_/components/javascripts/_main.js',
            dest: '_/javascripts/main.min.js'
        }
    },
    cssmin: {
        build: {
            src: '_/components/styles/_style.css',
            dest: '_/styles/style.min.css'
        }
    },
	coffee: {
		options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: '_/components/javascripts/working/my_working.coffee',
            dest: '_/components/javascripts/my_working.js'
        }
	},
	haml: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			language: 'coffee'
		},
		index: {
			src: '_/components/views/index.haml',
			dest: 'index.php'
		},
		header: {
			src: '_/components/views/layouts/header.haml',
			dest: '_/views/layouts/header.php'
		},
		footer: {
			src: '_/components/views/layouts/footer.haml',
			dest: '_/views/layouts/footer.php'
		},
		snippet_dropdown_info: {
			src: '_/components/views/layouts/snippet_dropdown_info.haml',
			dest: '_/views/layouts/snippet_dropdown_info.php'
		},
		snippet_categories: {
			src: '_/components/views/layouts/snippet_categories.haml',
			dest: '_/views/layouts/snippet_categories.php'
		},
		snippet_showroom: {
			src: '_/components/views/layouts/snippet_showroom.haml',
			dest: '_/views/layouts/snippet_showroom.php'
		},
		snippet_pages: {
			src: '_/components/views/layouts/snippet_pages.haml',
			dest: '_/views/layouts/snippet_pages.php'
		},
		aside_filter_categories: {
			src: '_/components/views/layouts/aside_filter_categories.haml',
			dest: '_/views/layouts/aside_filter_categories.php'
		},
		aside_filter_fur: {
			src: '_/components/views/layouts/aside_filter_fur.haml',
			dest: '_/views/layouts/aside_filter_fur.php'
		},
		aside_filter_size: {
			src: '_/components/views/layouts/aside_filter_size.haml',
			dest: '_/views/layouts/aside_filter_size.php'
		},
		aside_filter_price: {
			src: '_/components/views/layouts/aside_filter_price.haml',
			dest: '_/views/layouts/aside_filter_price.php'
		},
		aside_filter_color: {
			src: '_/components/views/layouts/aside_filter_color.haml',
			dest: '_/views/layouts/aside_filter_color.php'
		},
		aside_filter_facing: {
			src: '_/components/views/layouts/aside_filter_facing.haml',
			dest: '_/views/layouts/aside_filter_facing.php'
		}
	},
	less: {
		options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: '_/components/styles/working/less.less',
            dest: '_/components/styles/less.css'
        },
		bootstrap: {
			src: '_/components/styles/bootstrap3/bootstrap.less',
            dest: '_/components/styles/bootstrap.css'
		}
	},
	sass: {
		options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
			compass: true,
			style: 'expanded',
			debugInfo: false
        },
		build: {
            src: '_/components/styles/working/sass.sass',
            dest: '_/components/styles/sass.css'
        }
	},
	compass: {
		options: {
            sassDir: '_/components/styles',
			cssDir: '_/css'
        }
	},
	watch: { // grunt watch для запуска отслеживания
       p: {
            files: ["_/components/views/*.haml", 
                    "_/components/views/layouts/*.haml", 
                    "_/components/styles/working/*.sass",
                    "_/components/styles/working/*.less",
                    "_/components/styles/bootstrap3/*.less",
                    "_/components/javascripts/working/*.coffee"
                   ],
            tasks: ['haml', 'sass', 'less', 'coffee', 'concat:prod_js', 'concat:prod_css', 'uglify', 'cssmin']
        },
        d: {
            files: ["_/components/views/*.haml", 
                    "_/components/views/layouts/*.haml", 
                    "_/components/styles/working/*.sass",
                    "_/components/styles/working/*.less",
                    "_/components/styles/bootstrap3/*.less",
                    "_/components/javascripts/working/*.coffee"
                   ],
            tasks: ['haml', 'sass', 'less', 'coffee', 'concat:dev_js', 'concat:dev_css']
        },
		views: {
			files: ["_/components/views/*.haml", 
                    "_/components/views/layouts/*.haml"],
			tasks: 'haml'
		},
        styles: {
            files: ["_/components/styles/working/*.sass", 
                    "_/components/styles/bootstrap3/*.less", 
                    "_/components/styles/working/*.less"
                   ],
            tasks: ['sass', 'less', 'concat:dev_css']
        },
        scripts: {
            files: "_/components/javascripts/working/*.coffee",
			tasks: ['coffee', 'concat:dev_js']
        }
	}
  });

  // Load the plugin that provides the "uglify" task.
  //require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'coffee', 'less', 'sass', 'haml', 'concat:bootstrap', 'concat:prod_js', 'concat:prod_css', 'uglify', 'cssmin']);

};