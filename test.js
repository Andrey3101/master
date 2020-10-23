import { Selector } from 'testcafe';
    
fixture (`My first start`)
  .page (`https://machinesignals.com/ru/?`);
  
  const Youmail = Selector('#form__wrapper')
	.child('input')
	.withText('Ваш e-mail');

test('My first test or testcafe', async t =>{
   await t
    .click('#contacts')
    });
test('My two test or testcafe', async t =>{
    await t
    .click ('#how-it-works')
    });
test('My three test or testcafe', async t =>{
    await t
    .click ('#advantages')
   // .resizeWindowToFitDevice('iphonexr');
    });
