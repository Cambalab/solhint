const ExternalCallChecker = require('./external-call');
const CompilerVersionChecker = require('./fixed-compiler');
const ExplicitVisibilityChecker = require('./explicit-visibility');
const AvoidDeprecationsChecker = require('./avoid-deprecations');
const KeepFallbackSimpleChecker = require('./keep-fallback-simple');
const NoSimilarFuncEventNamesChecker = require('./no-similar-func-event-names');
const MultipleSendCallsInTxChecker = require('./multiple-send-calls-in-tx');
// const MarkUntrustedContractsChecker = require('./mark-unstrusted-contracts');


module.exports = function (reporter) {
    return [
        new ExternalCallChecker(reporter),
        new CompilerVersionChecker(reporter),
        new ExplicitVisibilityChecker(reporter),
        new AvoidDeprecationsChecker(reporter),
        new KeepFallbackSimpleChecker(reporter),
        new NoSimilarFuncEventNamesChecker(reporter),
        new MultipleSendCallsInTxChecker(reporter),
        // new MarkUntrustedContractsChecker(reporter),
    ];
};