import { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  ButtonGroup,
  Alert,
  Spinner,
  Badge,
} from "react-bootstrap";

const templates = {
  acknowledgment: "Acknowledgment",
  future_consideration: "Future Consideration",
  on_the_radar: "On the Radar",
  decline_politely: "Decline Politely",
};

const tones = {
  neutral: "Neutral",
  friendly: "Friendly",
  apologetic: "Apologetic",
};

function App() {
  const [requestText, setRequestText] = useState("");
  const [template, setTemplate] = useState("acknowledgment");
  const [tone, setTone] = useState("neutral");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!requestText.trim()) {
      setError("Please enter a request text before generating a response.");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await axios.post("/api/v1/ai/generate", {
        requestText,
        template,
        tone,
      });
      setResponse(res.data.response);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Failed to generate response. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">
              🗺️ RoadmapResponder
            </h1>
            <p className="lead text-muted">
              Generate professional responses to customer feature requests with
              AI assistance
            </p>
          </div>

          {/* Main Form Card */}
          <Card className="shadow-lg border-0 mb-4">
            <Card.Header className="bg-primary text-white">
              <h5 className="mb-0">
                <i className="bi bi-chat-left-text me-2"></i>
                Generate Response
              </h5>
            </Card.Header>
            <Card.Body className="p-4">
              {/* Request Text Input */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">
                  Customer Request <Badge bg="danger">Required</Badge>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter the customer feature request or feedback here..."
                  value={requestText}
                  onChange={(e) => setRequestText(e.target.value)}
                  className="shadow-sm"
                />
                <Form.Text className="text-muted">
                  Paste the original customer request or feature suggestion
                </Form.Text>
              </Form.Group>

              {/* Template Selection */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold mb-3">
                  Response Template
                </Form.Label>
                <ButtonGroup className="w-100 d-flex flex-wrap gap-2">
                  {Object.entries(templates).map(([val, label]) => (
                    <Button
                      key={val}
                      variant={template === val ? "primary" : "outline-primary"}
                      onClick={() => setTemplate(val)}
                      className="flex-fill"
                      style={{ minWidth: "150px" }}
                    >
                      {label}
                    </Button>
                  ))}
                </ButtonGroup>
              </Form.Group>

              {/* Tone Selection */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold mb-3">
                  Response Tone
                </Form.Label>
                <ButtonGroup className="w-100 d-flex gap-2">
                  {Object.entries(tones).map(([val, label]) => (
                    <Button
                      key={val}
                      variant={tone === val ? "primary" : "outline-primary"}
                      onClick={() => setTone(val)}
                      className="flex-fill"
                    >
                      {label}
                    </Button>
                  ))}
                </ButtonGroup>
              </Form.Group>

              {/* Error Alert */}
              {error && (
                <Alert variant="danger" className="mb-4">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                </Alert>
              )}

              {/* Generate Button */}
              <div className="d-grid">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={loading || !requestText.trim()}
                  className="fw-semibold"
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        className="me-2"
                      />
                      Generating Response...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-magic me-2"></i>
                      Generate AI Response
                    </>
                  )}
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* Response Card */}
          {response && (
            <Card className="shadow-lg border-0">
              <Card.Header className="bg-success text-white">
                <h5 className="mb-0">
                  <i className="bi bi-check-circle me-2"></i>
                  Generated Response
                </h5>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="bg-light p-4 rounded border-start border-5 border-success">
                  <p className="mb-0 lh-lg" style={{ whiteSpace: "pre-wrap" }}>
                    {response}
                  </p>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => navigator.clipboard.writeText(response)}
                  >
                    <i className="bi bi-clipboard me-1"></i>
                    Copy to Clipboard
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => setResponse("")}
                  >
                    <i className="bi bi-x-circle me-1"></i>
                    Clear
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}

          {/* Footer */}
          <div className="text-center mt-5 text-muted">
            <small>Powered by OpenAI GPT • Built with React & Bootstrap</small>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
