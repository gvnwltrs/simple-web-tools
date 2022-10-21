import {describe, it, expect, vi } from 'vitest'; 

//create virtual DOM
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom'

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();


const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

// code to test 

// test 
describe('Template Test', () => {
    
    it('does something here', () => {
        expect('nothing').toBe('nothing'); 
    });
)};