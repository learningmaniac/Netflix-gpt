import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../Contants';

const openai = new OpenAI({
  apiKey: process.env[OPENAI_API_KEY], // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});

export default openai; 