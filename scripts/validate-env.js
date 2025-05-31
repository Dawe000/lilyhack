// This script validates environment variables before deployment
// Run with: node scripts/validate-env.js

const fs = require('fs');
const path = require('path');

const requiredVars = [
  'OPENAI_API_KEY',
  'OPENAI_API_BASE'
];

function checkEnvFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return false;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n');
  const envVars = {};

  // Parse the environment variables
  for (const line of lines) {
    if (line.trim() === '' || line.startsWith('#') || line.startsWith('//')) continue;
    
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const [, key, value] = match;
      envVars[key.trim()] = value.trim();
    }
  }

  // Check if all required variables are present and have values
  let allValid = true;
  for (const varName of requiredVars) {
    if (!envVars[varName]) {
      console.error(`❌ Missing required environment variable: ${varName}`);
      allValid = false;
    } else if (envVars[varName].length < 5) {
      console.warn(`⚠️ Warning: ${varName} value is suspiciously short`);
    } else {
      console.log(`✅ Found environment variable: ${varName}`);
    }
  }

  return allValid;
}

// Check both .env and .env.production files
console.log('Validating environment variables...');
const devValid = checkEnvFile(path.join(__dirname, '..', '.env'));
const prodValid = checkEnvFile(path.join(__dirname, '..', '.env.production'));

if (devValid && prodValid) {
  console.log('✅ All required environment variables are present.');
} else {
  console.error('❌ Some required environment variables are missing. See above for details.');
  process.exit(1);
}
