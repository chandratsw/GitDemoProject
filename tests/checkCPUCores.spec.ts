import { test, expect } from '@playwright/test';
import os from 'os';

// node -e "console.log(require('os').cpus().length)"

test('CPU Cores Check', async ({ page }) => {
    console.log(os.cpus().length);

})