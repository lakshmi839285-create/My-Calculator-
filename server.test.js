import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateInput} from './server.js';
const base={language:'English',detail:'Concise'};
test('accepts public YouTube video URLs',()=>{
 for(const url of ['https://www.youtube.com/watch?v=dQw4w9WgXcQ','https://youtu.be/dQw4w9WgXcQ','https://youtube.com/shorts/dQw4w9WgXcQ']) assert.equal(validateInput({...base,url}).file_data.file_uri,url);
});
test('rejects unsafe, unsupported or non-video links',()=>{
 for(const url of ['http://youtube.com/watch?v=dQw4w9WgXcQ','https://youtube.com.evil.test/watch?v=dQw4w9WgXcQ','https://localhost/video','https://youtube.com/','https://youtube.com/shorts/no','https://user:pass@youtube.com/watch?v=dQw4w9WgXcQ'])assert.throws(()=>validateInput({...base,url}));
});
test('enforces input options and video payload constraints',()=>{
 assert.equal(validateInput({...base,mime:'video/mp4',data:'YWJj'}).inline_data.mime_type,'video/mp4');
 for(const body of [{language:'Unknown',url:'https://youtu.be/dQw4w9WgXcQ'},{mime:'text/html',data:'YWJj'},{mime:'video/mp4',data:'!bad'},{mime:'video/mp4',data:'A'.repeat(19_000_004)},{mime:'video/mp4',data:''},{detail:'invalid',mime:'video/mp4',data:'YWJj'}])assert.throws(()=>validateInput({...base,...body}));
});
