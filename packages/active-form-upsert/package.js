Package.describe({
  name:'photonic:active-form-upsert',
  version: '0.0.1',
  summary: 'Photonic::ActiveForm::recordUpsertPage',
  git: 'http://github.com/awatson1978/active-record/packages/active-form-upsert',
  documentation: 'README.md',
});

Package.onUse( function ( api ) {
  api.versionsFrom('1.1.0.2');
  api.use('aldeed:simple-schema@1.3.3');
  api.use('aldeed:collection2@2.3.3');
  api.use('aldeed:autoform@5.3.2');

  api.use('meteor-platform');
  api.use('iron:router@1.0.7');
  api.use('less');

  api.addFiles('components/recordUpsertPage/recordUpsertPage.html', ['client']);
  api.addFiles('components/recordUpsertPage/recordUpsertPage.js', ['client']);
  api.addFiles('components/recordUpsertPage/recordUpsertPage.less', ['client']);

  api.export('recordUpsertPage');
});

Package.onTest( function ( api ) {
  api.use('tinytest');
  api.use('photonic:active-form-upsert');
  api.addFiles('active-form-upsert-tests.js');
});
