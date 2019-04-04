module.exports = function (grunt) {
    var config = {
        shell: {
            src: {
                command: 'tsc -p src',
                options: {
                    failOnError: false
                }
            },
            webpack: {
                command: 'webpack --config webpack.config.js'
            }
        },
        copy: {
            dist: {
                files: [
                    { expand: true, cwd: 'out', src: [`**/*.d.ts`], dest: 'dist' }
                ]
            }
        },
    }

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('build', ['shell', 'copy']);
};