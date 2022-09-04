const Resume = () => {
  function iframeLoaded() {
    let iframe = document.getElementById('iframeId');
    console.log("this: ", iframe);
    console.log("resize");
    if (iframe) {
      iframe.height =
      iframe.contentWindow.document.body.offsetHeight + "px";
    }
  };

  return (
    


    <section id="resume-container" className="resume-container">
      <h2 className="primary-section-title">// Resume //</h2>
      <div className="resume-details flex-row">
      <iframe id="iframeId" frameborder='0' src="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=feba6fb425&attid=0.1&permmsgid=msg-f:1743064073605302522&th=18309b8a2ffd48fa&view=att&disp=inline&ser=1&saddbat=ANGjdJ-U6xJhjHtZ3Nn-73f8DA4cNj1uWWFmR3L3QYlEe_ylTxoZJJFp7y_RyzkHptP8szmRRYgBcbrvDT5HOcbtvF303D8kRrS39mDJAqLG2AUClxOQ-FcLH4hPve7MUYfGTK38K46DedMPLIKWZg-Bloqkyr8KtKL4UzEzDjg7_zeArwHHcjYo18yzsJCY-QRZcpu3qNwldTjIE4txBiN19IolyYX7-6HnO46Ol6Cml35kMn_CTs1RjpokS9hhDOqNhGtVA-I9JyrpTzgaHxNr5yPOnYOTrnYWV3G4QoUaForsFNCxkl0bBGT_2dSAqL6GNfSKuDqeFebpG025mT8uXXUqkwaZBKw_RsNC0Dm2vIwPpeRYpT4WEXnCyD004gWUqWhe4-_KDHSrfwd5hPptGC4ocfMUSKx1qLRLw3nRygSOTArwRpyWxZojAL8c7DgV64EZh7MRQhm1HJ0CDphVShqitduBSy809sm6O4sObKwgfMYWTZL1DHoA6JJt14FmeiEgVv49w3AU39l2B79Eo3G1E2URpRJTFEYnQKfg-XgBLmbomDoc9ZfBKbG3gxm1zsIv1KSd7gdZK0DIpHYpE0ijOguQedamst_OuwIO9ew2Dq8UIJNicBkrpCBQPWcBLsvnLzF2W41LmQdDohFURXC_H-EIggBV27EnErYQhNTcKaM-5uxu6EghE6mqJdxOL0sl_mXA5CVOOiQ8oeUrYKG9QCmD8dxNPPV3rdOuRnjc115DHU6aF_dluDXhVdQbMgFvMwKwnHf-dxVT_iSwHQJ2vq0kmTO1FVQ3kAe8GFHbxAckUs3TQJFsUfKlUg1Ar7bJNsx8laH8Oenn"></iframe>
      </div>
    </section>
  );
};

export default Resume;
