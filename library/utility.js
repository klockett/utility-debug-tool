var chalk = require('chalk');


// Semantic Versioning

// Major [0] Minor [1] Patch [2]

exports.bump = (currentSemVersion, typeofIncrement) => {

  const aryVersions = currentSemVersion.split('.');

  for(let versionIndex in aryVersions){
    aryVersions[versionIndex] = parseInt(aryVersions[versionIndex]);
  }

  if(typeofIncrement === 'patch') {
    aryVersions[2] += 1;
  } else if(typeofIncrement === 'minor'){
    aryVersions[2] = 0;
    aryVersions[1] += 1;
  } else if(typeofIncrement === 'major'){
    aryVersions[2] = 0;
    aryVersions[1] = 0;
    aryVersions[0] += 1;
  }

  return aryVersions.join('.');
}

exports.debug = (title, obj, status) => {
  const seperator = '\n================================\n';
  const output = seperator + title + seperator;

  const error = chalk.bold.red;
  const success = chalk.bold.green;


  if (process.env.DEBUG){

   if (status){
    console.log(success(output), obj);
  } else {
    console.error(error(output), obj);
  }
  }
};
